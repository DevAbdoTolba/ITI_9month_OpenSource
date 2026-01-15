import java.util.ArrayList;
public class TestShape{

    public static void main(String[] args){
        TestShape test = new TestShape();
        ArrayList<Shape> arr1 = new ArrayList<Shape>();
        arr1.add(new Circle());
        arr1.add(new Circle());
        arr1.add(new Circle());
        
        
        ArrayList<Shape> arr2 = new ArrayList<Shape>();
        arr2.add(new Rectangle());
        
        arr2.add(new Rectangle());
        
        
        test.paint(arr1);
        test.paint(arr2);
    }
    
    public void paint(ArrayList<? extends Shape> shapes){
        for(int i = 0; i < shapes.size(); i++){
            shapes.get(i).draw();
        }
    }
}