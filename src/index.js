
import * as THREE from 'three';

import OrbitControls from 'three-es6-plugin/es6/OrbitControls';
import OBJLoader from 'three-es6-plugin/es6/OBJLoader';
import MTLLoader from 'three-es6-plugin/es6/MTLLoader';
import DDSLoader from 'three-es6-plugin/es6/DDSLoader';


const canvas = document.getElementById("canvas");
const camera = new THREE.PerspectiveCamera( 75, canvas.width/canvas.height, 0.1, 1000 );
const renderer = new THREE.WebGLRenderer({canvas: canvas});
const geometry = new THREE.BoxGeometry( 1, 1, 1 );
const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
const cube = new THREE.Mesh( geometry, material );
const scene = new THREE.Scene();
scene.add( cube );


const controls = new OrbitControls(camera, renderer.domElement);
const objl = new OBJLoader();
const mtll = new MTLLoader();
const ddsl = new DDSLoader();
// ...

camera.position.z = 2;
let render = () => {
    const t = performance.now() / 1000.;
    cube.rotation.x = Math.PI/2 * t;
    renderer.render(scene, camera);
};
let animate = () => {
    requestAnimationFrame(animate);
    render();
};
animate();
