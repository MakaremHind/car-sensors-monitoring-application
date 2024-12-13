# Generating Reference Documentation with JSDoc

This guide explains how to generate reference documentation for the Car Sensors Monitoring App using **JSDoc**.

---

## Step 1: Install JSDoc

To use JSDoc for generating documentation, you first need to install it. You can install it globally or as a development dependency in your project.

### Install Globally

```bash
npm install -g jsdoc
```

### Install as a Development Dependency
```bash
npm install --save-dev jsdoc
```

## Step 2: Generate Documentation
Once **JSDoc** is installed, you can generate the documentation for the project.

## Using a Configuration File (Recommended)
If the project contains a jsdoc.json configuration file, run the following command to generate the documentation:

```bash
jsdoc -c jsdoc.json
```
Replace jsdoc.json with the path to your JSDoc configuration file if it has a different name or location.

## Without a Configuration File
To generate documentation for the entire project, simply run:

```bash
jsdoc .
```

## Step 3: View the Generated Documentation
The generated documentation will be available in the `out/` (if you use this command `jsdoc .`) or in `./docs/documentation_files` (if you use this command `jsdoc -c jsdoc.json`) folder by default (or the folder specified in the configuration file). To view the documentation:

- Navigate to the `./docs/documentation_files` or `out/` folder in the project.
- Open the `index.html` file in your browser.

[<-Back to HOME PAGE](../How_to_guides.md)
