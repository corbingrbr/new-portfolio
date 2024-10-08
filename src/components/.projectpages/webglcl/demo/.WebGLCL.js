import React, {useEffect} from 'react';

/*const WebGLCLDemo = () => {

    useEffect(webGLStart(), []);

    return (
        <div>
        <canvas id="canvas" width="900px" height="675"></canvas>
        <p id="crystalType">Simple</p>
        <button className="btn btn-success" onClick={}>Instructions</button>
        </div>
    )

}

const webGLStart = () => {

        // Initialize scene
        Scene.load("resources/");

        initGL(); // sets up canvas element for webgl

        gl.enable(gl.DEPTH_TEST);
     	gl.enable(gl.BLEND);
	    gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
        gl.enable(gl.CULL_FACE);


        // Setup shader
        prog = new Program("shader-vs", "shader-fs");
        prog.load();
        prog.bind();
        prog.addHandle("vertPos", "attribute")
        prog.addHandle("vertNor", "attribute");
        prog.addHandle("P", "uniform");
        prog.addHandle("MV", "uniform");
        prog.addHandle("kdFront", "uniform");
        prog.addHandle("alpha", "uniform");

        // Setup camera
        camera = new Camera();
        camera.setAspect(1200.0 / 900.0);

        // Setup key events
        User.setup();

        tick();
  }

const tick= () => {

      requestAnimFrame(tick);

        // configure gl viewport and clean buffers
        gl.viewport(0, 0, gl.viewportWidth, gl.viewportHeight);
        gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
        gl.clearColor(1.0, 1.0, 1.0, 1.0);

        var MV = new MatrixStack();
        var P = new MatrixStack();

        P.pushMatrix();
        camera.applyProjectionMatrix(P);

        MV.pushMatrix();
        camera.applyViewMatrix(MV);

        prog.bind();

        gl.uniformMatrix4fv(prog.getHandle("P"), false, P.top());
        MV.pushMatrix();
        Scene.draw(MV, prog);
        MV.popMatrix();

        prog.unbind();

        P.popMatrix();
        MV.popMatrix();

  }



<script type="text/javascript" src="../../../jquery-1.9.1.min.js"></script>
<script type="text/javascript" src="src/webgl-utils.js"></script>
<script type="text/javascript" src="src/gl-matrix/common.js"></script>
<script type="text/javascript" src="src/gl-matrix/mat3.js"></script>
<script type="text/javascript" src="src/gl-matrix/mat4.js"></script>
<script type="text/javascript" src="src/gl-matrix/vec2.js"></script>
<script type="text/javascript" src="src/gl-matrix/vec3.js"></script>
<script type="text/javascript" src="src/gl-matrix/vec4.js"></script>
<script type="text/javascript" src="src/program.js"></script>
<script type="text/javascript" src="src/shader.js"></script>
<script type="text/javascript" src="src/obj-loader.js"></script>
<script type="text/javascript" src="src/shape.js"></script>
<script type="text/javascript" src="src/scene.js"></script>
<script type="text/javascript" src="src/matrixStack.js"></script>
<script type="text/javascript" src="src/stack.js"></script>
<script type="text/javascript" src="src/scene.js"></script>
<script type="text/javascript" src="src/camera.js"></script>
<script type="text/javascript" src="src/assert.js"></script>
<script type="text/javascript" src="src/crystal.js"></script>
<script type="text/javascript" src="src/unitCell.js"></script>
<script type="text/javascript" src="src/simpleCubic.js"></script>
<script type="text/javascript" src="src/layer.js"></script>
<script type="text/javascript" src="src/user.js"></script>
<script type="text/javascript" src="src/angleAxis.js"></script>
<script type="text/javascript" src="src/bodyCentered.js"></script>
<script type="text/javascript" src="src/faceCentered.js"></script>

  const instruct = () => {
     alert("mouse : rotate view\nmouse + ctrl : zoom\n'e' : expand\n'c' : contract\n'i' : inspect unit cell\n't' : translucent\n'l' : toggle layer aniamtion\n'n' : next");
  }


*/
