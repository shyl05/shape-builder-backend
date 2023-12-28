var mongoose = require('mongoose');
const {Schema} = mongoose;

var shapeSchema = Schema({
    type:{
        type: String,
        required: true, 
    },
    name:{
        type: String,
        required: true,
        unique: true,
    },
    x: {
        type: Number,
    },
    y: {
        type: Number,
    },
    height: {
        type: Number,
    },
    width: {
        type: Number,
    },
    radius: {
        type: Number,
    },
    radiusX: {
        type: Number,
    },
    radiusY: {
        type: Number,
    },
    numPoints:{
        type: Number,
    },
    innerRadius: {
        type: Number,
    },
    outerRadius: {
        type: Number,
    },
    draggable: {
        type: Boolean,
    },
    points: {
        type: Array,
    },
})

const shape = mongoose.model('Shape', shapeSchema);

module.exports=shape