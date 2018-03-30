
import java.util.regex.*;
import java.io.*;
import java.rmi.server.UnicastRemoteObject;
import java.rmi.registry.Registry;
import java.rmi.registry.LocateRegistry;
import java.rmi.RemoteException;
import java.util.ArrayList;
import java.rmi.NotBoundException;
import java.rmi.ConnectException;

public class Noeud implements ServiceNoeud{
public Noeud(){

}

public String traiter(String t,String rech,String remp) throws RemoteException{
   Pattern p=Pattern.compile(" "+rech+" ");
  Matcher m=p.matcher(t);
  String res=m.replaceAll(" "+remp+" ");

  return res;

}

public static void main(String[] args){
  try{
Registry reg = LocateRegistry.getRegistry(args[0],1099);
ServiceRecherche sd=(ServiceRecherche)reg.lookup("Distributeur");
Noeud n = new Noeud();
ServiceNoeud sn=(ServiceNoeud) UnicastRemoteObject.exportObject(n, 0);
sd.enregistrer(sn);



}

catch(RemoteException e){		e.printStackTrace();
System.out.println("annuaire inexistant ");
}
catch(NotBoundException e){
System.out.println("Nom du service inexistant");
}

catch(Exception e){
e.printStackTrace();
System.out.println("autre exception");
}
}

}
