import java.util.Random; 

public class Task4LinearSearch{

    public static void main(String[] args){
        int arr[] = new int[1000];
        
        Random rnd = new Random();
        rnd.setSeed(42);
        
        for(int i = 0;i < 1000; i++){
            arr[i] = rnd.nextInt();
        }
        
        long start_time = System.nanoTime();
        
        int min = Integer.MAX_VALUE, max = Integer.MIN_VALUE;
        
        
        for(int i = 0; i < 1000; i++){
            if(arr[i] < min) min = arr[i];
            if(arr[i] > max) max = arr[i];
        }
        
        System.out.println("MAX: " + max);
        System.out.println("Min: " + min);
        
        long end_time = System.nanoTime();
        System.out.println("Time taken: " + (((end_time - start_time) / 60) / 60) + "ms");
        
        
    }

}