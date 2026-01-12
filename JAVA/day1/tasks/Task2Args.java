public class Task2Args{

    public static void main(String[] args){
        if(args.length > 0){
            System.out.println(args[0]);
        } else {
            System.out.println("Nothing was passed");
        }
    }

}