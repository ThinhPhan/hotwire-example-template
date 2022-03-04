import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = [ "source" ]
  static values = { destination: String }

  append() {
    const destination = document.getElementById(this.destinationValue)

    for (const { content } of this.sourceTargets) {
      destination.append(content.cloneNode(true))
    }
  }
}
