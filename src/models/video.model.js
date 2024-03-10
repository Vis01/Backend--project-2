import mongoose, { Schema } from "mongoose"; 
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema(
  {
    videoFile:{
        type:String , //cloudenary
        required:true,
    },
    thumbnail:{
        type:String , //cloudenary
        required:true,
    },
    title:{
        type:String , //
        required:true,
    },
    description:{
        type:String , //
        required:true,
    },
    duration:{
        type:Number,  //cloudenary
        required:true
    },
    views:{
        type:Number,
        default:0
    },
    isPublished:{
        type:Boolean,
        default:type
    }

  },
  {
    timestamps: true,
  }
);
videoSchema.plugin(mongooseAggregatePaginate)
export const Video = mongoose.model("Video", videoSchema);
