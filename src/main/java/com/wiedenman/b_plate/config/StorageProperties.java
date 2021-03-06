package com.wiedenman.b_plate.config;

import org.springframework.boot.context.properties.ConfigurationProperties;


@ConfigurationProperties("storage")
public class StorageProperties {


    /**
     * Folder location for storing files
     */
    private String location = "src/main/resources/static/assets/images";

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }


}
