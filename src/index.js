function colorLogger(message_to_display, background, color, other_args) {
    console.log("%c" + message_to_display, "background:" + background + ";color:" + color , other_args);
}

const P = {
    msg: '',
    other_args: '',
    magenta() {
        colorLogger(this.msg, "magenta", "black", this.other_args)
    },
    indigo() {
        colorLogger(this.msg, "indigo", "black", this.other_args)
    },
    yellow() {
        colorLogger(this.msg, "yellow", "black", this.other_args)
    },
    red() {
        colorLogger(this.msg, "red", "black", this.other_args)
    },
    green() {
        colorLogger(this.msg, "green", "black", this.other_args)
    },
    blue() {
        colorLogger(this.msg, "blue", "black", this.other_args)
    }
  };

  P.msg = 'Until when';
  P.other_args = 'other';
  P.indigo();
  P.magenta();
  P.blue();
  P.green();
  P.red();
  P.yellow();

