public class Task3RepeatString{

    public static void main(String[] args){
        if(args.length > 0){
            int i = Integer.parseInt(args[0]);
            while(i-- >= 1){
                System.out.println(args[1]);
            }
        } else if( args.length == 1 ) {
            System.out.println("Must pass 2 values");
        } else {
            System.out.println("Nothing was passed");
        }
    }

}