
import * as THREE from 'three';


import { GLTFLoader } from "./build/GLTFLoader.js";
import { OrbitControls } from "./build/OrbitControls.js";


let camera, scene, renderer, mixer;


init();

function init() {

    scene = new THREE.Scene();
    // scene.background = new THREE.Color(0x000000);
   


    camera = new THREE.PerspectiveCamera(10, window.innerWidth / window.innerHeight, 1, 5000);
    camera.rotation.y = 45 / 180 * Math.PI;
    camera.position.x = 800;
    camera.position.y = 100;
    camera.position.z = 1000;



    let clock = new THREE.Clock();

    renderer = new THREE.WebGLRenderer();
    renderer.domElement.getElementsByClassName('#model')
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setAnimationLoop(animation);
    document.body.appendChild(renderer.domElement);

    window.addEventListener('resize', onWindowResized);


    // let AmbientLight = new THREE.AmbientLight(0x404040);
    // scene.add(AmbientLight);

    // let control = new OrbitControls(camera, renderer.domElement);  
  
    let model;
    let loader = new GLTFLoader();
    loader.load('./models/a_windy_day/scene.gltf', function (gltf) {
        model = gltf.scene.children[0];
        model.position.set(-70, 100, 0);
        model.scale.set(100, 100, 100);
        scene.add(model);
     
    });

  

    

    function onWindowResized() {

        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();

    }

    function animation() {
        // model.rotation.y += -0.01;
        renderer.render(scene, camera);
       
        
        

    }

}