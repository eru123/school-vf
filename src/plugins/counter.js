class Counter {

    constructor(charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789") {
        this.charset = charset
    }

    setCharset(charset) {
        this.charset = charset
    }

    charsetArray() {
        return this.charset.split("");
    }

    zeroOccurence(n) {
        n = +Number(n) || 0;
        var s = String(n);
        return (s.match(/0/g) || []).length;
    }

    getHighestTenth(num, base) {
        num = +Number(num) || 0
        base = +Number(base) || 0
        var zero = ""
        while (true) {
            num /= base
            if (num >= 1) {
                zero += "0"
            } else break
        }
        return Math.floor(Number("1" + zero) / 10)
    }
    toChar(i) {
        i = +Number(i) || 0;
        var res = "", zeros = "";
        var c = this.charsetArray()     // chartset array
        var n = c.length                // chartset length
        var ht, lht = 0, t, ts;
        var cr = i;
        while (true) {
            ht = this.getHighestTenth(cr, n);
            if (ht > 0) {
                t = ht * n;
                ts = t * Math.floor(cr / t)

                console.log(lht, ht, t)

                if (lht > 0 && ht == lht - 2) {
                    res += c[0]
                } else {
                    res += c[(ts / t) - 1]
                }

                cr -= ts
                lht = ht
                console.log(lht, ht, t)

            } else break;
        }
        if (cr <= 0) {
            res += c[0]
        } else {
            res += c[cr]
        }
        console.log(res)
        return res;
    }
}


module.exports = Counter