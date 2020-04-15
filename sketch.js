let capture
let tracker



function setup() {

    createCanvas(800, 600).parent('p5')

    // start capturing video
    capture = createCapture(VIDEO)
    capture.size(800, 600)
    capture.hide()

    // create the tracker
    tracker = new clm.tracker()
    tracker.init()
    tracker.start(capture.elt)


}

function draw() {

    // draw background stuff
    background(0)

    // show the mirrored video feed
  //  showFlippedCapture() for no background

    // get new data from tracker
    let features = tracker.getCurrentPosition()


    for (let feature of features) {
           circle(feature.x, feature.y, 5)
       }


    // sometimes the tracker doesn't capture anything
    // in that case, we want to stop the function right here using 'return'
    if (features.length == 0) {
        return
    }

    // 'features' is an array of objects with x, y properties
  //  for (let feature of features) {
  //      stroke(255)
  //      fill(255)
  //      circle(feature.x, feature.y, 4)
  //      text(feature.label, feature.x, feature.y)
  //  }




    // the nose is feature 62


    let top_lip = [ features[50],
                    features[59],
                    features[60],
                    features[61],
                    features[44],
                    features[45],
                    features[46],
                    features[47],
                    features[48],
                    features[49],
                ]
    noStroke()
    fill(73, 108, 145)
    beginShape()
    for (let mouth_point of top_lip) {
      curveVertex(mouth_point.x, mouth_point.y)
    }
    endShape(CLOSE)

    let bottom_lip = [  features[51],
                        features[52],
                        features[53],
                        features[54],
                        features[55],
                        features[56],
                        features[57],
                        features[58],
                ]
    noStroke()
    fill(73, 108, 145)
    beginShape()
    for (let mouth_point of bottom_lip) {
      curveVertex(mouth_point.x, mouth_point.y)
    }
    endShape(CLOSE)

    // the eyes are elements 32 and 27
    fill(0, 0, 255)
    circle(features[32].x, features[32].y, 20)  // access the array directly
    circle(features[27].x, features[27].y, 20)

    let left_eye = [    features[28],
                        features[70],
                        features[31],
                        features[69],
                        features[30],
                        features[68],
                        features[29],
                        features[67]
                    ]
noStroke()
fill(252, 254, 255)
beginShape()
for (let eye_point of left_eye) {
curveVertex(eye_point.x, eye_point.y)
}
endShape(CLOSE)

let left_pupil = features[32]
fill(15, 15, 15)
circle(left_pupil.x, left_pupil.y, 10)

let right_eye = [   features[25],
                    features[65],
                    features[26],
                    features[66],
                    features[23],
                    features[63],
                    features[24],
                    features[64]
                ]

noStroke()
fill(252, 254, 255)
beginShape()
for (let eye_point of right_eye) {
curveVertex(eye_point.x, eye_point.y)
}
endShape(CLOSE)

let right_pupil = features[27]
fill(15, 15, 15)
circle(right_pupil.x, right_pupil.y, 10)

fill(148, 147, 146)
triangle(features[35].x, features[35].y, features[3].x, features[3].y, features[1].x, features[1].y)

fill(148, 147, 146)
triangle(features[39].x, features[39].y, features[11].x, features[11].y, features[13].x, features[13].y)

fill(64, 39, 110)
triangle(features[41].x, features[41].y, features[0].x, features[0].y, features[1].x, features[1].y)

fill(64, 39, 110)
triangle(features[41].x, features[41].y, features[13].x, features[13].y, features[14].x, features[14].y)

fill(255, 9, 5)
triangle(features[25].x, features[25].y, features[64].x, features[64].y, features[65].x, features[65].y)

fill(255, 9, 5)
triangle(features[23].x, features[23].y, features[63].x, features[63].y, features[66].x, features[66].y)

fill(255, 9, 5)
triangle(features[30].x, features[30].y, features[68].x, features[68].y, features[69].x, features[69].y)

fill(255, 9, 5)
triangle(features[28].x, features[28].y, features[67].x, features[67].y, features[70].x, features[70].y)

fill(8, 156, 10)
triangle(features[62].x, features[62].y, features[38].x, features[38].y, features[37].x, features[37].y)

fill(8, 156, 10)
triangle(features[62].x, features[62].y, features[36].x, features[36].y, features[37].x, features[37].y)

}



// this function flips the webcam and displays it
function showFlippedCapture() {
    push()
    translate(capture.width, 0)
    scale(-1, 1)
    image(capture, 0, 0, capture.width, capture.height)
    pop()
}
