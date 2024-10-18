package isans.hackathon.rbc.controller;

import isans.hackathon.rbc.entity.clients;
import isans.hackathon.rbc.service.ClientsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import shaded_package.io.swagger.annotations.Authorization;

import java.util.concurrent.ExecutionException;

@RestController
@RequestMapping("/api")
public class ClientController {
    @Autowired
    private ClientsService clientsService;

    @PostMapping("/clients")
    public String saveClient(@RequestBody clients client) throws ExecutionException, InterruptedException {
        return clientsService.saveClient(client);
    }
}
