public class MainClass implements Test{
 

    public int mul(int a,int b){
        return a*b;    
    }
    
    
    public int sum(int a, int b){
        return a + b;
    }
    
    
    public static void main(String[] args){
        System.out.println("hi"); 
        AnotherClass obj = new AnotherClass();
        Test obj = new AnotherClass();
        Test obj = new MainClass();
    }
}


class AnotherClass implements Test{
    public int div(int a,int b){
        return a/b;    
    }

    public int sum(int a, int b){
        return a + b;
    }
        
}


interface Test{
    public static final int x = 5;
    public int sum(int a, int b);
}