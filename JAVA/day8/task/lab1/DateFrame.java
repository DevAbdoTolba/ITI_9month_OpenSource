import java.util.Date;
import java.awt.BorderLayout;
import javax.swing.JFrame;
import javax.swing.JLabel;


public class DateFrame extends JFrame implements Runnable{

        Thread th;
        Date d = new Date();
        JLabel dateLabel = new JLabel();
        
        public DateFrame(){
            this.setTitle("Time & Date Application Thread");
            
            dateLabel.setHorizontalAlignment(JLabel.CENTER);
            dateLabel.setText(d.toString());
            this.add(dateLabel,BorderLayout.CENTER);
            
            th = new Thread(this);
            th.start();
        }
        
        public static void main(String[] args){
            DateFrame app = new DateFrame();
            app.setBounds(50,50,600,400);
            app.setVisible(true);    
            
        }
        
        @Override
        public void run(){
            while(true){
                d = new Date();
                dateLabel.setText(d.toString());
                try{
                    Thread.sleep(100);
                } catch(Exception e){
                    System.out.println(e);
                }
            }
        }
            
}