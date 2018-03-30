import java.rmi.Remote;
import java.rmi.RemoteException;

public interface ServiceNoeud extends Remote{
public String traiter(String t,String rech,String remp)throws RemoteException;
}
