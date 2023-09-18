// TODO: conhecer e importar a classe Scanner

import java.util.Scanner;

public class Contaterminal{

	public static void main(String[] args) {
	    Scanner myObj = new Scanner(System.in);

	  /*  Exibir as mensagens para o nosso usuário  	 
      / Obter pela scanner os valores digitados no terminal 
      /Obter pela scanner os valores digitados no terminal    
      */ 
	  // Digite o seu nome
	    System.out.println("Por favor, digite o seu nome:");
	    String name = myObj.nextLine();
	    
	 // Digite o numero da Agencia
	    System.out.println("Por favor, digite o numero da Agencia:");
	    String agencia = myObj.nextLine();
	    
	 // Digite o numero da Conta
	    System.out.println("Por favor, digite o numero da conta:");
	    int conta = myObj.nextInt();
	    	   	   
	    
	 // Digite o saldo
	    System.out.printf("Por favor, digite o Saldo:");
	   	    double saldo = myObj.nextDouble();
	     	   	  	

     // Exibir a mensagem conta criada
	 // Mensagem para usuario 
	   	    
	   	 System.out.println("Olá: " + name + " Obrigado por criar uma conta em nosso banco, sua agencia é " + agencia + " conta: " + conta +  " e seu saldo:  " + saldo + " já está disponivel para saque");    
	   	
	  
	  }
	}

    




   









