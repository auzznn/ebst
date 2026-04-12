export const generatePlaceholderHtml = (data: any): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Placeholder Document</title>
  <style>
    body { font-family: Arial, sans-serif; text-align: center; margin-top: 20%; color: #555; }
    h1 { color: #333; }
  </style>
</head>
<body>
  <h1>Document Type Not Yet Implemented</h1>
  <p>This is a placeholder for future document types.</p>
</body>
</html>
  `;
};
