import java.util.function.UnaryOperator;
import java.lang.Math;

public class quadraticFormulaSolver {
    public static void main(String[] args) {
        Double a = null, b = null, c = null;
        if (args.length == 0) {
            a = 1.0;
            b = 4.0;
            c = 3.0;
        }else if (args.length > 0 && args.length < 3) {
            System.out.println("Must enter A, B, and C values");
            return;
        } else {
            a = Double.parseDouble(args[0]);
            b = Double.parseDouble(args[1]);
            c = Double.parseDouble(args[2]);

        }
            Double[] values = new Double[]{a, b, c};

            UnaryOperator<Double[]> rootCalculator = new UnaryOperator<Double[]>(){
                @Override
                public Double[] apply(Double[] root) {
                    Double resultRoots[] = new Double[2];
                    
                    Double a = root[0];
                    Double b = root[1];
                    Double c = root[2];

                    Double underTheRootOperation = (b * b) - (4 * a * c);

                    if(underTheRootOperation < 0) {
                        System.out.println("No real roots");
                        return null;
                    } else if (underTheRootOperation == 0) {
                        Double sqrt = Math.sqrt(underTheRootOperation);
                        resultRoots[0] = (b - sqrt) / (2 * a);
                        resultRoots[1] = resultRoots[0];
                        return resultRoots;
                    } else {
                        Double sqrt = Math.sqrt(underTheRootOperation);
                        resultRoots[0] = (b + sqrt) / (2 * a);
                        resultRoots[1] = (b - sqrt) / (2 * a);
                        return resultRoots;
                    }
                }
            };


        Double[] resultRoots = rootCalculator.apply(values);
        if (resultRoots != null) {
            System.out.println("Root 1: " + resultRoots[0]);
            System.out.println("Root 2: " + resultRoots[1]);
        }

    }
}