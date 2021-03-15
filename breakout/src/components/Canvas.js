import React, { useEffect } from "react"
import "../index.css"

const Canvas = () => {
	const width = window.innerWidth - 50
	const height = window.innerHeight - 200

	useEffect(() => {
		const canvas = document.getElementById("canvas")
		const ctx = canvas.getContext("2d")
		let score = 0

		const resetBricks = () => {
			bricks.forEach(column => {
				column.forEach(brick => (brick.visible = true))
			})
		}

		const checkGame = () => {
			score++

			if (score > 99) {
				resetBricks()
				score = 0
			}
		}

		// Create ball ///////////////////////////////////////
		const ball = {
			x: canvas.width / 2,
			y: canvas.height / 2,
			size: 10,
			speed: 4,
			dx: 4,
			dy: -4
		}

		// Draw ball on canvas
		const drawBall = () => {
			ctx.beginPath()
			ctx.arc(ball.x, ball.y, ball.size, 0, Math.PI * 2)
			ctx.fillStyle = "#512da8"
			ctx.fill()
			ctx.closePath()
		}

		// Move ball
		const moveBall = () => {
			ball.x += ball.dx
			ball.y += ball.dy

			// All collision (right/left)
			if (ball.x + ball.size > canvas.width || ball.x - ball.size < 0) {
				ball.dx *= -1
			}

			// All collision (top/bottom)
			if (ball.y + ball.size > canvas.height || ball.y - ball.size < 0) {
				ball.dy *= -1
			}

			// Paddle collision
			if (
				ball.x - ball.size > paddle.x &&
				ball.x + ball.size < paddle.x + paddle.w &&
				ball.y + ball.size > paddle.y
			) {
				ball.dy = -ball.speed
			}

			// Brick collision
			bricks.forEach(column => {
				column.forEach(brick => {
					if (brick.visible) {
						if (
							ball.x - ball.size > brick.xBrick &&
							ball.x + ball.size < brick.xBrick + brick.w &&
							ball.y + ball.size > brick.yBrick &&
							ball.y - ball.size < brick.yBrick + brick.h
						) {
							ball.dy *= -1
							brick.visible = false
							checkGame()
						}
					}
				})
			})

			if (ball.y + ball.size > canvas.height) {
				resetBricks()
				score = 0
			}
		}

		// Create paddle /////////////////////////////
		const paddle = {
			x: canvas.width / 2 - 40,
			y: canvas.height - 20,
			w: 80,
			h: 10,
			speed: 8,
			dx: 0
		}
		// Move paddle
		const movePaddle = () => {
			paddle.x += paddle.dx

			// wall detection
			if (paddle.x + paddle.w > canvas.width) {
				paddle.x = canvas.width - paddle.w
			}

			if (paddle.x < 0) {
				paddle.x = 0
			}
		}

		// Draw paddle on canvas
		const drawPaddle = () => {
			ctx.beginPath()
			ctx.rect(paddle.x, paddle.y, paddle.w, paddle.h)
			ctx.fillStyle = "#512da8"
			ctx.fill()
			ctx.closePath()
		}

		// Draw score on Canvas /////////////////////////
		const drawScore = () => {
			ctx.font = "20px Roboto, sans-serif"
			ctx.fillText(`Score:${score}`, canvas.width - 110, 30)
		}

		// Create brick /////////////////////
		const brick = {
			w: width / 10,
			h: 10,
			offsetY: 60,
			visible: true
		}

		// Create bricks //////////////////
		const bricks = []
		for (let i = 0; i < brick.w; i++) {
			bricks[i] = []
			for (let j = 0; j < brick.h; j++) {
				const xBrick = i * brick.w
				const yBrick = j * brick.h + brick.offsetY
				bricks[i][j] = { xBrick, yBrick, ...brick }
			}
		}

		// Draw bricks
		const drawBricks = () => {
			bricks.forEach(column => {
				column.forEach(brick => {
					ctx.beginPath()
					ctx.rect(brick.xBrick, brick.yBrick, brick.w, 10)
					ctx.fillStyle = brick.visible ? "#512da8" : "transparent"
					ctx.fill()
					ctx.closePath()
				})
			})
		}

		// Draw canvas /////////////////////////
		const draw = () => {
			// Clear canvas
			ctx.clearRect(0, 0, canvas.width, canvas.height)
			drawBall()
			drawPaddle()
			drawScore()
			drawBricks()
		}
		// Update canvas
		const updateCanvas = () => {
			moveBall()
			movePaddle()
			draw()
			requestAnimationFrame(updateCanvas)
		}
		updateCanvas()

		// Keyboard event handlers /////////////////
		const keyDown = e => {
			if (e.key === "Right" || e.key === "ArrowRight") {
				paddle.dx = paddle.speed
			} else if (e.key === "Left" || e.key === "ArrowLeft") {
				paddle.dx = -paddle.speed
			}
		}

		const keyUp = e => {
			if (
				e.key === "Right" ||
				e.key === "ArrowRight" ||
				e.key === "Left" ||
				e.key === "ArrowLeft"
			) {
				paddle.dx = 0
			}
		}

		document.addEventListener("keydown", keyDown)
		document.addEventListener("keyup", keyUp)
	}, [width, height])

	return (
		<>
			<canvas
				id="canvas"
				className="canvasDisplay"
				width={width}
				height={height}></canvas>
		</>
	)
}

export default Canvas
