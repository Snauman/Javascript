import java.rmi.Remote;
import java.rmi.RemoteException;

public interface ServiceRecherche extends Remote{


	public void enregistrer(ServiceNoeud s) throws RemoteException;
	public String[] separer(String texte) throws RemoteException;
	public  String repartir(String doc,String recherche,String remplacement) throws RemoteException;

}
