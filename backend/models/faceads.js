const mongoose = require("mongoose");

const faceadsSchema = new mongoose.Schema({
    date_start: {type: Date},
    date_stop: {type: Date},
    ad_name: {type: String},
    campaign_name: {type: String},
    reach: {type: Number},
    impressions: {type: Number},
    clicks: {type: Number},
    spend: {type: Number},
    conversions: {type: Number},
    full_view_impressions: {type: Number},
    full_view_reach: {type: Number},
    video_p25_watched_actions: {type: Number},
    video_p50_watched_actions: {type: Number},
    video_p75_watched_actions: {type: Number},
    video_p95_watched_actions: {type: Number},
})

const Faceads = mongoose.model('faceads', faceadsSchema);

module.exports = Faceads;