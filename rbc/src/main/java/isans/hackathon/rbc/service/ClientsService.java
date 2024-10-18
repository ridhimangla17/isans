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
        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection(COLLECTION_NAME).document(client.getFirst_name()).set(client);
        return collectionApiFuture.get().getUpdateTime().toString();
    }
}
