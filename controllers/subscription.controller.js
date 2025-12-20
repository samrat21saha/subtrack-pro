import { workflowClient } from "../config/upstash";
import Subscription from "../models/subscription.model";

export const createSusbscription = async (req, res, next) =>{
    try{
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id,
        });

        await workflowClient.trigger({url, body, headers, workflowRunId, retries}): {
            url: `${SERVER_URL}/api/v1/workflows/subscription/reminder`,
            body: {
                subscriptionId: subscription.id
            },
            headers: { 
                'content-type': 'application/json', 
            } ,
            workflowRunId: ,
            retries: 0,
        })


        res.status(201).json({success: true, data:{ subscription, workflowRunId}});
    }catch(error){
        next(error);
    }
}


export const getUserSubscriptions = async(req, res, next) =>{
    try{
        if(req.user.id != req.prams.id){
            const error = new Error('You are not owner of this account');
            error.status = 401;
            throw error;
        }
        const subscriptions = Subscription.find({user: req.params.id});
        res.status(200).json({success: true, data: subscriptions});
    }catch(error){
        next(error);
    }
}


export default createSusbscription;