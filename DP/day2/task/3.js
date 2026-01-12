class TV {
    inc() { console.log("TV Vol Up"); }
    dec() { console.log("TV Vol Down"); }
    mute() { console.log("TV Muted"); }
}
class Speaker {
    inc() { console.log("Speaker Vol Up"); }
    dec() { console.log("Speaker Vol Down"); }
    mute() { console.log("Speaker Muted"); }
}

class BasicRemote {
    constructor(device) { this.device = device; }
    up() { this.device.inc(); }
    down() { this.device.dec(); }
}
class SmartRemote extends BasicRemote {
    mute() { this.device.mute(); }
}

new SmartRemote(new TV()).mute();
new BasicRemote(new Speaker()).up();