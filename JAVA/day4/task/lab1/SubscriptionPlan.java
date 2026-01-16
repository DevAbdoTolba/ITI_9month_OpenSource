public class SubscriptionPlan {

    public int quotaLimit = 20;

    SubscriptionPlan() {}
    SubscriptionPlan(int quotaLimit) {
        this.quotaLimit = quotaLimit;
    }

    public void doCall(int callDuration) throws InsufficientBalanceException {

        
        if (callDuration > this.quotaLimit) {
            throw new InsufficientBalanceException("Calling quota has been exceeded.");
        }
        this.quotaLimit -= callDuration;        
        System.out.println("Call made successfully.");
    }

    public void sendSMS(int smsLength) throws InsufficientBalanceException {

        if (smsLength > this.quotaLimit) {
            throw new InsufficientBalanceException("Sending SMS quota has been exceeded.");
        }
        this.quotaLimit -= smsLength;        
        System.out.println("SMS sent successfully.");
    }


    public void useData(int mbUsed) throws InsufficientBalanceException {

        if (mbUsed > this.quotaLimit) {
            throw new InsufficientBalanceException("Data quota has been exceeded.");
        }
        this.quotaLimit -= mbUsed;        
        System.out.println("Data used successfully.");
    }  


}