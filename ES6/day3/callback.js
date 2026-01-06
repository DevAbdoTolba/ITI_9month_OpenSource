function tolba(value){
    this.value = null || value;
    this.then = function (callback) {
        this.value = callback(this.value)
        return {
            value : this.value,
            then : this.then
        };
    }
    
    return this
}

tolba(2).then(newVal => newVal * 2)