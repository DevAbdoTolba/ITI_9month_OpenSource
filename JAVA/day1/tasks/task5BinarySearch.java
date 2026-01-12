import java.util.Random; 

public class task5BinarySearch{

    public static void main(String[] args){
        int arr[] = new int[1000];

        Random rnd = new Random();
        rnd.setSeed(42);
        
        for(int i = 0;i < 1000; i++){
            arr[i] = rnd.nextInt();
        }
        
        
        int min = Integer.MAX_VALUE, max = Integer.MIN_VALUE;
                
        // Sort
        for(int i = 0; i < 1000; i++){
            for(int j = 0; j < 1000; j++){
                if(arr[i] < arr[j]) {
                    int temp = arr[i];
                    arr[i] = arr[j];
                    arr[j] = temp;
                };
            }
        }
        
        long start_time = System.nanoTime();
        
        
        //MIN
        int l = 0,r = 1000,value = arr[0];
        while( l <= r){
            int m = (l+r)/2;
            
            if(arr[m] == value){
                min = value;
                break;
            }
            else if(arr[m] > value){
                r = m - 1;
            } else {
                l = m + 1;
            }
            
        }
        
        System.out.println("Min: " + min);
        
        
        //MAX
        value = arr[999];
        while( l <= r){
            int m = (l+r)/2;
            
            if(arr[m] == value){
                max = value;
                break;
            }
            else if(arr[m] > value){
                r = m - 1;
            } else {
                l = m + 1;
            }
            
        }
        System.out.println("MAX: " + max);
        
        
        
        long end_time = System.nanoTime();
        System.out.println("Time taken: " + (((end_time - start_time) / 60) / 60) + "ms");
        
    }

}