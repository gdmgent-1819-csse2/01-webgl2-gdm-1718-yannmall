import Vector2 from './Math/Vector/Vector2.js'

/** Class representing a canvas element for WebGL2 */
export default class Canvas {
    constructor(width, height, shaderSources) {
        this.width = width
        this.height = height
        this.shaderSources = shaderSources

        this.colors = {
            black: [0, 0, 0, 0],
            blue: [0, 0, 255, 0],
            cyan: [0, 255, 255, 0],
            green: [0, 255, 0, 0],
            magenta: [255, 0, 255, 0],
            red: [255, 0, 0, 0],
            white: [255, 255, 255, 0],
            yellow: [255, 255, 0, 0],
            orange: [255, 165, 0, 0],
            bordeaux: [95, 2, 31, 0],
        }
        this.data = {
            colors: [],
            positions: [],
        }

        this.gl = null
        this.program = null
        this.run()


        //Event handler that updates every second
        window.addEventListener('updateCanvas', event => {
            setInterval(() => {
                this.updateCanvasHandler(event)
            }, 1000)
        }, false);

    }

    updateCanvasHandler(event) {
        console.log('updateCanvas')
        this.clearData()

        // White point in the middle
        this.data.positions.push(0, 0)
        this.data.colors.push(...this.colors.white)

        const v = new Vector2(.5, 0)
        this.data.positions.push(v.x, v.y)
        this.data.colors.push(...this.colors.red)

        for(let i = 0; i < 12; i++){
            v.rot(30)
            this.data.positions.push(v.x, v.y)
            this.data.colors.push(...this.colors["yellow"])
        }

        {
            //calculate angle
            let dateTime, hours, minutes, seconds
            dateTime = new Date
            hours = 30 * ((dateTime.getHours() % 12) + dateTime.getMinutes() / 60)
            minutes = 6 * dateTime.getMinutes()
            seconds = 6 * dateTime.getSeconds()
    
            console.log(hours, minutes, seconds)

            //hour hand
            const hourHand1 = new Vector2(0, 0.3)
            const hourHand2 = new Vector2(0, 0.2)
            const hourHand3 = new Vector2(0, 0.1)
            const r1 = Math.round(Math.random() * 255)
            const g1 = Math.round(Math.random() * 255)
            const b1 = Math.round(Math.random() * 255)
            hourHand1.rot(-hours)
            this.data.positions.push(hourHand1.x, hourHand1.y)
            this.data.colors.push(r1, g1, b1, 0)
            hourHand2.rot(-hours)
            this.data.positions.push(hourHand2.x, hourHand2.y)
            this.data.colors.push(r1, g1, b1, 0)
            hourHand3.rot(-hours)
            this.data.positions.push(hourHand3.x, hourHand3.y)
            this.data.colors.push(r1, g1, b1, 0)
    
            //minute hand
            const minuteHand1 = new Vector2(0, 0.4)
            const minuteHand2 = new Vector2(0, 0.3)
            const minuteHand3 = new Vector2(0, 0.2)
            const minuteHand4 = new Vector2(0, 0.1)
            const r2 = Math.round(Math.random() * 255)
            const g2 = Math.round(Math.random() * 255)
            const b2 = Math.round(Math.random() * 255)
            minuteHand1.rot(-minutes)
            this.data.positions.push(minuteHand1.x, minuteHand1.y)
            this.data.colors.push(r2, g2, b2, 0)
            minuteHand2.rot(-minutes)
            this.data.positions.push(minuteHand2.x, minuteHand2.y)
            this.data.colors.push(r2, g2, b2, 0)
            minuteHand3.rot(-minutes)
            this.data.positions.push(minuteHand3.x, minuteHand3.y)
            this.data.colors.push(r2, g2, b2, 0)
            minuteHand4.rot(-minutes)
            this.data.positions.push(minuteHand4.x, minuteHand4.y)
            this.data.colors.push(r2, g2, b2, 0)
    
            //second hand
            let secondHand1 = new Vector2(0, 0.5)
            let secondHand2 = new Vector2(0, 0.4)
            let secondHand3 = new Vector2(0, 0.3)
            let secondHand4 = new Vector2(0, 0.2)
            let secondHand5 = new Vector2(0, 0.1)
            const r3 = Math.round(Math.random() * 255)
            const g3 = Math.round(Math.random() * 255)
            const b3 = Math.round(Math.random() * 255)
            secondHand1.rot(-seconds)
            this.data.positions.push(secondHand1.x, secondHand1.y)
            this.data.colors.push(r3, g3, b3, 0)
            secondHand2.rot(-seconds)
            this.data.positions.push(secondHand2.x, secondHand2.y)
            this.data.colors.push(r3, g3, b3, 0)
            secondHand3.rot(-seconds)
            this.data.positions.push(secondHand3.x, secondHand3.y)
            this.data.colors.push(r3, g3, b3, 0)
            secondHand4.rot(-seconds)
            this.data.positions.push(secondHand4.x, secondHand4.y)
            this.data.colors.push(r3, g3, b3, 0)
            secondHand5.rot(-seconds)
            this.data.positions.push(secondHand5.x, secondHand5.y)
            this.data.colors.push(r3, g3, b3, 0)
        }
        this.drawScene()
    }

    run() {
        try {
            this.createCanvas()
            this.createShaders()
            this.createProgram()
            this.createVertexArray()
            // Initial drawing on the canvas
            {
                // Random points
                for (let i = 0, max = 100000; i < max; i++) {
                    this.data.positions.push(Math.random() * 2 - 1, Math.random() * 2 - 1)
                    this.data.colors.push(Math.round(Math.random() * 255), Math.round(Math.random() * 255), Math.round(Math.random() * 255), 0)
                }
                // White point in the middle.
                this.data.positions.push(0, 0)
                this.data.colors.push(...this.colors.white)
            }
            this.drawScene()

        } catch (error) {
            console.error(error)
        }
    }

    clearData() {
        this.data = {
            colors: [],
            positions: [],
        }
    }

    createBuffers() {
        this.createBuffer('COLOR')
        this.createBuffer('POSITION')
    }

    createBuffer(bufferType) {
        const gl = this.gl
        const program = this.program

        let name // Name of attribute used in GLSL.
        let normalized // Should it be normalized to a value between 0 and 1.
        let size // Number of components per vertex attribute, can be 1 through 4.
        let srcData
        let type // Datatype.
        const stride = 0 // 0 = move forward size * sizeof(type) each iteration to get the next position.
        const offset = 0 // Start at the beginning of the buffer.

        switch (bufferType) {
            case 'COLOR':
                name = 'a_VertexColor'
                normalized = true
                size = 4
                srcData = new Uint8Array(this.data.colors)
                type = gl.UNSIGNED_BYTE // Integer from 0 through 255.
                break
            case 'POSITION':
                name = 'a_VertexPosition'
                normalized = false
                size = 2
                srcData = new Float32Array(this.data.positions)
                type = gl.FLOAT
                break
            default:
                return null
        }

        const buffer = gl.createBuffer()
        gl.bindBuffer(gl.ARRAY_BUFFER, buffer)
        gl.bufferData(gl.ARRAY_BUFFER, srcData, gl.STATIC_DRAW)

        const index = gl.getAttribLocation(program, name)
        gl.enableVertexAttribArray(index)
        gl.vertexAttribPointer(index, size, type, normalized, stride, offset) // @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/vertexAttribPointer
    }

    createCanvas() {
        const canvas = document.createElement('canvas')
        document.body.appendChild(canvas)
        canvas.height = this.height
        canvas.width = this.width
        const gl = this.gl = canvas.getContext('webgl2')
        gl.clearColor(0, 0, 0, 0) // @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/clearColor
        gl.viewport(0, 0, gl.canvas.width, gl.canvas.height) // @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/viewport
    }

    createProgram() {
        const gl = this.gl

        const program = gl.createProgram()
        gl.attachShader(program, this.vertexShader)
        gl.attachShader(program, this.fragmentShader)
        gl.linkProgram(program)

        const success = gl.getProgramParameter(program, gl.LINK_STATUS)
        if (success) {
            this.program = program
            gl.useProgram(program)
        } else {
            console.error(gl.getProgramInfoLog(program))
            gl.deleteProgram(program)
        }
    }

    createShaders() {
        const gl = this.gl

        this.vertexShader = this.createShader(gl.VERTEX_SHADER)
        this.fragmentShader = this.createShader(gl.FRAGMENT_SHADER)
    }

    createShader(type) {
        const gl = this.gl

        let source
        switch (type) {
            case gl.FRAGMENT_SHADER:
                source = this.shaderSources.fragment
                break
            case gl.VERTEX_SHADER:
                source = this.shaderSources.vertex
                break
            default:
                console.error('Shader type does not exist.')
                return null
        }

        const shader = gl.createShader(type)
        gl.shaderSource(shader, source)
        gl.compileShader(shader)

        const success = gl.getShaderParameter(shader, gl.COMPILE_STATUS)
        if (success) {
            return shader
        }
        console.error(type, gl.getShaderInfoLog(shader))
        gl.deleteShader(shader)
    }

    createVertexArray() {
        const gl = this.gl

        const vertexArray = gl.createVertexArray()
        gl.bindVertexArray(vertexArray)
    }

    drawScene() {
        const gl = this.gl

        this.createBuffers()

        gl.clear(gl.COLOR_BUFFER_BIT) // @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/clear

        const modes = [ // @see https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Constants#Rendering_primitives
            gl.POINTS,
            gl.LINES,
            gl.LINE_STRIP,
            gl.LINE_LOOP,
            gl.TRIANGLES,
            gl.TRIANGLE_STRIP,
            gl.TRIANGLE_FAN,
        ]
        const dimensions = 2
        const mode = modes[0]
        const first = 0
        const count = this.data.positions.length / dimensions
        gl.drawArrays(mode, first, count) // @see https://developer.mozilla.org/en-US/docs/Web/API/WebGLRenderingContext/drawArrays
    }
}