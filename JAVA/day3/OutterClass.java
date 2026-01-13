public class OutterClass{
    
    public static void main(String[] args){
        OutterClass obj = new OutterClass();
        InnerClass obj2 = obj.new InnerClass();
        System.out.println(obj2.x);
    }
    
    public int y = 10;
    
    class InnerClass{
        public int x = OutterClass.this.y;
        public void caller(Object a){
            a.call();
        }
        caller(new (){
            public void call(){
                System.out.println("AAAAH");
            }
        })
    }

}