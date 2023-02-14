// This plugin will open a window to prompt the user to enter a number, and
// it will then create that many rectangles on the screen.

// This file holds the main code for the plugins. It has access to the *document*.
// You can access browser APIs in the <script> tag inside "ui.html" which has a
// full browser environment (see documentation).

// This shows the HTML page in "ui.html".
figma.showUI(__html__);

// Calls to "parent.postMessage" from within the HTML page will trigger this
// callback. The callback will be passed the "pluginMessage" property of the
// posted message.
figma.ui.onmessage = msg => {
  // One way of distinguishing between different types of messages sent from
  // your HTML page is to use an object with a "type" property like this.
 
  // if (msg.type === 'create-guide-line') {
  // org code - start
  // if (msg.type === 'create-rectangles') {
  //   const nodes: SceneNode[] = [];
  //   for (let i = 0; i < msg.count; i++) {
  //     const rect = figma.createRectangle();
  //     rect.x = i * 150;
  //     rect.fills = [{type: 'SOLID', color: {r: 1, g: 0.5, b: 0}}];
  //     figma.currentPage.appendChild(rect);
  //     nodes.push(rect);
  //   }
  //   figma.currentPage.selection = nodes;
  //   figma.viewport.scrollAndZoomIntoView(nodes);
  // }
  // org code - end

  if (msg.type === 'create-guide-line') {
    const line = figma.createLine()

    // Move to (50, 50)
    line.x = -2000
    line.y = 50

    // Make line 200px long
    // line.resize(200, 0)
    // line.resize(figma.viewport.bounds.width, 0)
    line.resize(figma.viewport.bounds.width * 10, 0)

    // 4px thick red line with arrows at each end
    line.strokeWeight = 1
    line.strokes = [{ type: 'SOLID', color: { r: 1, g: 0, b: 0 } }]
    // line.strokeCap = 'ARROW_LINES'
  }

  // Make sure to close the plugin when you're done. Otherwise the plugin will
  // keep running, which shows the cancel button at the bottom of the screen.
  figma.closePlugin();
};
