class Clock extends Component {
  refs = {
    clock: ".clock-time",
    icon: ".clock-icon",
  };

  constructor() {
    super();
  }

  imports() {
    return [this.resources.icons.material];
  }

  style() {
    return `
        .clock-time {
            white-space: nowrap;
            font: 300 9pt JetBrainsMono Nerd Font;
            src: url(../fonts/jetbrains-mono.ttf);
            color: ${CONFIG.palette.text};
            letter-spacing: .5px;
        }

        .clock-icon {
            color: ${CONFIG.palette.red};
            font-size: 10pt;
            margin-right: 10px;
        }
    `;
  }

  template() {
    return `
        <span class="material-icons clock-icon">schedule</span>
        <p class="clock-time"></p>
    `;
  }

  setIconColor() {
    this.refs.icon.style.color = CONFIG.palette.maroon;
  }

  setTime() {
    const date = new Date();
    this.refs.clock = date.strftime(CONFIG.clock.format);
  }

  connectedCallback() {
    this.render().then(() => {
      this.setTime();
      this.setIconColor();

      setInterval(() => this.setTime(), 1000);
    });
  }
}
