package com.yeshant1.springai.controller;

import org.springframework.ai.chat.client.ChatClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

@Controller
public class ImageGenerationController {

    private final ChatClient chatClient;

    @Autowired
    public ImageGenerationController(ChatClient.Builder chatClientBuilder) {
        this.chatClient = chatClientBuilder.build();
    }


    @GetMapping("/showImageGenerator")
    public String showImageGenerator() {
        return "imageGenerator"; // This should match your Thymeleaf template name
    }


    @PostMapping("/imageGenerator")
    public String imageGenerator(@RequestParam String prompt, Model model) {
        String imageUrl = chatClient.prompt()
                .user("Generate an image for: " + prompt)
                .call()
                .content(); // This should return the image URL from DALL·E

        model.addAttribute("response", imageUrl);
        return "imageGenerator"; // Return to the same view with the image URL
    }

}
