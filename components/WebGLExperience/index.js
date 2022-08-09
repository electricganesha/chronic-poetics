import React, { useRef, useEffect } from "react";
import styles from "./WebGLExperience.module.scss";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { DotScreenPass } from "three/examples/jsm/postprocessing/DotScreenPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass.js";
import { RGBShiftShader } from "three/examples/jsm/shaders/RGBShiftShader.js";
import lungVertexShader from "../../shaders/lungs/vertex.glsl";
import lungFragmentShader from "../../shaders/lungs/fragment.glsl";

const WebGLExperience = ({ name }) => {
  const canvas = useRef();

  useEffect(() => {
    const loader = new GLTFLoader();
    let lung = null;
    loader.load("/models/lungs/lungv1.glb", (loaded) => {
      lung = loaded.scene.children[0];
      lung.material = new THREE.ShaderMaterial({
        uniforms: {
          uTime: { value: null },
          tDiffuse: { value: null },
          uColor: { value: new THREE.Color(0x0000) },
        },
        transparent: true,
        vertexShader: lungVertexShader,
        fragmentShader: lungFragmentShader,
        depthWrite: false,
      });
      lung.rotation.z = Math.PI / 2;
      scene.add(lung);
    });
    const scene = new THREE.Scene();
    const width = canvas.current.clientWidth;
    const height = canvas.current.clientHeight;
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setClearColor("#fff");
    renderer.setSize(width, height);

    const directionalLight = new THREE.DirectionalLight("#fff", 10.0);
    scene.add(directionalLight);

    camera.position.y = 0.5;
    camera.position.z = 4;

    const renderTarget = new THREE.WebGLRenderTarget(800, 600, {
      samples: renderer.getPixelRatio() === 1 ? 2 : 0,
    });

    const effectComposer = new EffectComposer(renderer, renderTarget);
    effectComposer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    effectComposer.setSize(width, height);

    const renderPass = new RenderPass(scene, camera);
    effectComposer.addPass(renderPass);

    const dotScreenPass = new DotScreenPass();
    dotScreenPass.enabled = true;
    dotScreenPass.uniforms["scale"].value = 4;
    effectComposer.addPass(dotScreenPass);

    const shaderPass = new ShaderPass(RGBShiftShader);
    shaderPass.enabled = true;
    shaderPass.uniforms["amount"].value = 0.0015;
    effectComposer.addPass(shaderPass);

    const clock = new THREE.Clock();
    function animate() {
      const elapsedTime = clock.getElapsedTime();
      requestAnimationFrame(animate);
      if (lung) {
        lung.material.uniforms.uTime.value = elapsedTime;
      }

      effectComposer.render();
    }

    animate();

    canvas.current.appendChild(renderer.domElement);
  }, []);

  return (
    <React.Fragment>
      <div className={styles.canvas} ref={canvas} />
      <p className={styles.conditionName}>{name}</p>
    </React.Fragment>
  );
};

export default WebGLExperience;
