package isans.hackathon.rbc.service;

import com.google.api.core.ApiFuture;
import com.google.cloud.firestore.Firestore;
import com.google.cloud.firestore.QueryDocumentSnapshot;
import com.google.cloud.firestore.QuerySnapshot;
import com.google.cloud.firestore.WriteResult;
import com.google.firebase.cloud.FirestoreClient;
import isans.hackathon.rbc.entity.clientProgram;
import isans.hackathon.rbc.entity.clients;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.concurrent.ExecutionException;

@Service
public class ClientsService {

    private static final String COLLECTION_NAME = "clients";
    private static final String CLIENT_PROGRAMS_COLLECTION = "clientPrograms";
    private static final String PROGRAMS_COLLECTION = "Programs";

    public String saveClient(clients client) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection(COLLECTION_NAME).document(client.getClient_id()).set(client);
        return "Client with ID: " + client.getClient_id() + " deleted added.";
    }
    public String deleteClient(int clientId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        if (!doesClientExist(clientId)){
            return "Client with ID: " + clientId + " does not exist.";
        }
        ApiFuture<WriteResult> writeResult = dbFirestore.collection(COLLECTION_NAME).document(String.valueOf(clientId)).delete();
        return "Client with ID: " + clientId + " deleted successfully.";
    }

    public String registerClientToProgram(clientProgram clientProgram) throws ExecutionException, InterruptedException {
        if (!doesClientExist(clientProgram.getClient_id())) {
            return "Client with ID: " + clientProgram.getClient_id() + " does not exist.";
        }

        if (!doesProgramExist(clientProgram.getProgram_id())) {
            return "Program with ID: " + clientProgram.getProgram_id() + " does not exist.";
        }

        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<WriteResult> collectionApiFuture = dbFirestore.collection(CLIENT_PROGRAMS_COLLECTION)
                .document(clientProgram.getClient_id() + "_" + clientProgram.getProgram_id())
                .set(clientProgram);
        return "Client with ID: " + clientProgram.getClient_id() + " successfully registered to program with ID: " + clientProgram.getProgram_id();
    }

    private boolean doesClientExist(int clientId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<QuerySnapshot> query = dbFirestore.collection(COLLECTION_NAME)
                .whereEqualTo("client_id", clientId)
                .get();
        List<QueryDocumentSnapshot> documents = query.get().getDocuments();
        return !documents.isEmpty();
    }

    private boolean doesProgramExist(int programId) throws ExecutionException, InterruptedException {
        Firestore dbFirestore = FirestoreClient.getFirestore();
        ApiFuture<QuerySnapshot> query = dbFirestore.collection(PROGRAMS_COLLECTION)
                .whereEqualTo("program_id", programId)
                .get();
        List<QueryDocumentSnapshot> documents = query.get().getDocuments();
        return !documents.isEmpty();
    }


}
