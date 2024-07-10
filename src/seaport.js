import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import * as THREE from "three";
const loader = new GLTFLoader();

export class Seaport {
x;
y;
z;
    constructor(scene, camera,x,y,z) {
        this.camera = camera;
        loader.load("assets/buoy/scene.gltf", (gltf) => {
          scene.add(gltf.scene);
        //   gltf.scene.scale.set(0.5, 0.5, 0.5);
          gltf.scene.scale.set(25,25,25);
        //   gltf.scene.position.set(100, -25, -10);
          gltf.scene.position.set(x,y,z);
          this.x=x;
          this.y=y;
          this.z=z;
          gltf.scene.rotation.y=50;
          this.seaport = gltf.scene;
        });
      }

      update() {
        if (this.seaport) {
          const time = performance.now() * 0.001;
          this.seaport.position.y = this.y-Math.sin(time) * 2;
          this.seaport.position.x = this.x+Math.sin(time) * 2;
        }
      }
}