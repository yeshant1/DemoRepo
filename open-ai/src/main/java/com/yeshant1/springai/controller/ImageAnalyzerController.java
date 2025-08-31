package com.yeshant1.springai.controller;

import org.springframework.ai.chat.client.ChatClient;

import org.springframework.http.MediaType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import java.util.Base64;
import java.nio.file.Files;
import java.nio.file.Path;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;
import java.util.List;
import java.util.Map;
import java.util.Objects;

@Controller
public class ImageAnalyzerController {

    private static final String UPLOAD_DIR="C:\\Users\\HP\\OneDrive\\Desktop\\OneDrive\\Documents\\springai\\images\\uploads\\";

    private final ChatClient chatClient;

    @Autowired
    public ImageAnalyzerController(ChatClient.Builder chatClientBuilder) {
        this.chatClient = chatClientBuilder.build();
    }


    @GetMapping("/showImageAnalyzer")
    public String showUploadForm() {
        return "imageAnalyzer"; // This should match your Thymeleaf template name
    }
    @PostMapping("/imageAnalyzer")
    public String uploadImage(@RequestParam("prompt") String prompt,
                              @RequestParam("file") MultipartFile file,
                              Model model) {
        try {
            Path uploadDir = Paths.get(UPLOAD_DIR);
            if (!Files.exists(uploadDir)) {
                Files.createDirectories(uploadDir);
            }

            Path path = uploadDir.resolve(file.getOriginalFilename());
            Files.write(path, file.getBytes(), StandardOpenOption.CREATE);

            // Convert image to base64
            byte[] imageBytes = Files.readAllBytes(path);
            String base64Image = Base64.getEncoder().encodeToString(imageBytes);

            // Prepare request payload
            Map<String, Object> payload = Map.of(
//                  //  "model", "llava:7b",
//                      "model", "llava-llama3",

                    "model", "llama3.2-vision",

                    "prompt", prompt,
                    "images", List.of(base64Image)
            );

            HttpHeaders headers = new HttpHeaders();
            headers.setContentType(MediaType.APPLICATION_JSON);

            HttpEntity<Map<String, Object>> request = new HttpEntity<>(payload, headers);
            RestTemplate restTemplate = new RestTemplate();
            ResponseEntity<Map> response = restTemplate.postForEntity("http://localhost:11434/api/generate", request, Map.class);

            String content = (String) response.getBody().get("response");
            model.addAttribute("explanation", content);
        } catch (IOException e) {
            e.printStackTrace();
            model.addAttribute("message", "Failed to upload or analyze the file");
        }

        return "imageAnalyzer";
    }
}

