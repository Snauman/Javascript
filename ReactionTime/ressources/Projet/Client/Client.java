
import java.util.regex.*;
import java.io.*;
import java.rmi.server.UnicastRemoteObject;
import java.rmi.registry.Registry;
import java.rmi.registry.LocateRegistry;
import java.rmi.RemoteException;
import java.util.ArrayList;
import java.rmi.NotBoundException;
import java.rmi.ConnectException;
import java.util.ArrayList;

public class Client{

public static void main(String[] args){
  try{
Registry reg = LocateRegistry.getRegistry(args[0],1099);
ServiceRecherche sd=(ServiceRecherche)reg.lookup("Distributeur");
String texte="";
try{File f=new File(args[1]);
FileReader fr=new FileReader(f);
int c = fr.read();
while(c!=-1){
  texte+=(char)c;
        c = fr.read();
}
}catch(IOException e){
  e.printStackTrace();
}
System.out.println(sd.repartir(texte,args[2],args[3]));



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
