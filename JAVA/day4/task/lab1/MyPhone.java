public class MyPhone{
    public static void main(String[] args) {
        SubscriptionPlan plan = new SubscriptionPlan(50);

        try {
            plan.doCall(30);
            plan.sendSMS(15);
            plan.useData(10);
            plan.doCall(10);
        } catch (InsufficientBalanceException e) {
            System.out.println("Error: " + e.getMessage());
        }
    }

}