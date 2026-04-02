// Tree and Flower animation objects
var Tree = function(canvas, width, height, opts) {
    this.canvas = canvas;
    this.ctx = canvas.getContext('2d');
    this.width = width;
    this.height = height;
    this.opts = opts;
    
    this.seed = new Seed(this.ctx, opts.seed);
    this.branch = [];
    this.flower = [];
    this.footer = new Footer(this.ctx, opts.footer);
    
    this.init();
};

Tree.prototype = {
    init: function() {
        this.branchCount = 0;
        this.flowerCount = 0;
        this.branchCompleted = false;
        this.flowerCompleted = false;
    },
    
    grow: function() {
        if (this.branchCount < this.opts.branch.length) {
            var branchOpt = this.opts.branch[this.branchCount];
            var branch = new Branch(this.ctx, branchOpt);
            branch.draw();
            this.branch.push(branch);
            this.branchCount++;
        } else {
            this.branchCompleted = true;
        }
    },
    
    canGrow: function() {
        return !this.branchCompleted;
    },
    
    flower: function(count) {
        if (this.flowerCount < this.opts.bloom.num) {
            for (var i = 0; i < count; i++) {
                var x = Math.random() * this.opts.bloom.width;
                var y = Math.random() * this.opts.bloom.height;
                var flower = new Flower(this.ctx, x, y);
                flower.draw();
                this.flower.push(flower);
                this.flowerCount++;
            }
        } else {
            this.flowerCompleted = true;
        }
    },
    
    canFlower: function() {
        return !this.flowerCompleted;
    },
    
    snapshot: function(name, x1, y1, x2, y2) {
        this.snapshots = this.snapshots || {};
        this.snapshots[name] = this.ctx.getImageData(x1, y1, x2 - x1, y2 - y1);
    },
    
    move: function(name, x, y) {
        if (!this.snapshots || !this.snapshots[name]) return false;
        
        var snapshot = this.snapshots[name];
        this.ctx.putImageData(snapshot, x, y);
        return true;
    },
    
    toDataURL: function(type) {
        return this.canvas.toDataURL(type || 'image/png');
    }
};

// Branch class
var Branch = function(ctx, opt) {
    this.ctx = ctx;
    this.opt = opt;
};

Branch.prototype.draw = function() {
    if (!this.opt) return;
    
    var ctx = this.ctx;
    ctx.strokeStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.lineWidth = 2;
    
    ctx.beginPath();
    ctx.moveTo(this.opt[0], this.opt[1]);
    ctx.bezierCurveTo(
        this.opt[2], this.opt[3],
        this.opt[4], this.opt[5],
        this.opt[6], this.opt[7]
    );
    ctx.stroke();
};

// Seed class - clickable heart
var Seed = function(ctx, opt) {
    this.ctx = ctx;
    this.opt = opt;
    this.scale = opt.scale;
    this.x = opt.x;
    this.y = opt.y;
    this.color = opt.color;
};

Seed.prototype = {
    draw: function() {
        this.ctx.save();
        this.ctx.globalAlpha = 1;
        this.ctx.fillStyle = this.color;
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, this.scale * 4, 0, Math.PI * 2, true);
        this.ctx.fill();
        this.ctx.restore();
    },
    
    canScale: function() {
        return this.scale > 0;
    },
    
    scale: function(ratio) {
        this.scale *= ratio;
    },
    
    canMove: function() {
        return this.y < this.canvas ? true : false;
    },
    
    move: function(x, y) {
        this.x += x;
        this.y += y;
    },
    
    hover: function(x, y) {
        var distance = Math.sqrt(Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2));
        return distance < this.scale * 5;
    }
};

// Flower class - bloomin petals
var Flower = function(ctx, x, y) {
    this.ctx = ctx;
    this.x = x;
    this.y = y;
    this.alpha = Math.random() * 0.5 + 0.5;
};

Flower.prototype.draw = function() {
    var ctx = this.ctx;
    ctx.save();
    ctx.globalAlpha = this.alpha;
    ctx.fillStyle = 'rgb(190, 26, 37)';
    
    // Draw simple petal shape
    ctx.beginPath();
    ctx.arc(this.x, this.y, 3, 0, Math.PI * 2, true);
    ctx.fill();
    
    ctx.restore();
};

// Footer class
var Footer = function(ctx, opt) {
    this.ctx = ctx;
    this.opt = opt;
    this.y = opt.height;
};

Footer.prototype.draw = function() {
    var ctx = this.ctx;
    ctx.save();
    ctx.fillStyle = 'rgba(255, 255, 238, 0.1)';
    ctx.fillRect(0, this.y, this.opt.width, 5);
    ctx.restore();
};
