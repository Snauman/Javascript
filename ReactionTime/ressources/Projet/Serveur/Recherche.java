import java.util.regex.*;
import java.io.*;
import java.rmi.server.UnicastRemoteObject;
import java.rmi.server.RemoteServer;
import java.rmi.registry.Registry;
import java.rmi.registry.LocateRegistry;
import java.rmi.RemoteException;
import java.util.ArrayList;
import java.rmi.NotBoundException;
import java.rmi.ConnectException;
import java.util.ArrayList;

public class Recherche implements ServiceRecherche{

	private ArrayList<ServiceNoeud> noeuds;

	public Recherche(){
		this.noeuds=new ArrayList<ServiceNoeud>();


	}



	public String[] separer(String texte){

		Pattern p=Pattern.compile("\\.");
		String[] res=p.split(texte);
		return res;
	}

	public String repartir(String doc,String recherche,String remplacement) throws RemoteException{

		String res="";
		String[] tableau = this.separer(doc);
		int nb=0;
		for(int i=0;i<tableau.length;i++){
			int j=i;
			if(j>this.noeuds.size()-1){
				j=i-j;
			}
			try{
				res+=this.noeuds.get(j).traiter(tableau[i],recherche,remplacement);

			}catch(Exception e){
				this.noeuds.remove(j);
				
			}
			
		}
		return res;
		//faire le for sur les phrases
	}


	public void enregistrer(ServiceNoeud s){
		try{
		this.noeuds.add(s);
		String ip=RemoteServer.getClientHost();
		System.out.println("connection de "+ip);
		}catch(Exception e){

		}

	}


	public static void main(String[] args){
		try{
		Recherche r=new Recherche();
		ServiceRecherche sr=(ServiceRecherche) UnicastRemoteObject.exportObject(r, 0);
		Registry reg=LocateRegistry.createRegistry(1099);
		reg.rebind("Distributeur",sr);
		}catch(Exception e){
			e.printStackTrace();
	}
	}

}
