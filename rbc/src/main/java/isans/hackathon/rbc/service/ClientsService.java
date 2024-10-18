package isans.hackathon.rbc.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import isans.hackathon.rbc.entity.clients;
import org.springframework.stereotype.Service;

import java.util.concurrent.ExecutionException;

@Service
public class ClientsService {

    private static final String COLLECTION_NAME = "clients";

    public String saveClient(clients client) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection(COLLECTION_NAME).document(client.getClient_id()).set(client);
        return "Client with ID: " + client.getClient_id() + " deleted added.";
    }
    public String deleteClient(String clientId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> writeResult = dbFirestore.collection(COLLECTION_NAME).document(clientId).delete();
        return "Client with ID: " + clientId + " deleted successfully.";
    }
}
