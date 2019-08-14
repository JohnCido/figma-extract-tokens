/**
 * Copyright (c) 2019 John Cido
 *
 * This software is released under the MIT License.
 * https://opensource.org/licenses/MIT
 */
import {
  Message,
} from './interfaces'

figma.showUI(__html__)

// Handle income message
figma.ui.onmessage = (msg: Message) => {
  switch (msg.target) {
    default: break
  }

  // Terminate the plugin
  figma.closePlugin()
}
