const mongoose = require("mongoose");

const faceadsSchema = new mongoose.Schema({
    dateStart: [Date],
    dateStop: [Date],
    adName: [String],
    campaignName: [String],
    reach: [Number],
    impressions: [Number],
    clicks: [Number],
    spend: [Number],
    conversions: [String],
    fullViewImpressions: [Number],
    fullViewReach: [Number],
    videoP25WatchedActions: [Number],
    videoP50WatchedActions: [Number],
    videoP75WatchedActions: [Number],
    videoP95WatchedActions: [Number],
    weekYear: [String],
})

const Faceads = mongoose.model('faceads', faceadsSchema);

module.exports = Faceads;