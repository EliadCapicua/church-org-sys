import re
import logging
from pathlib import Path
from typing import List

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')

def validate_module_references(modules_path: str) -> List[str]:
  failed_files: List[str] = []
  modules_dir = Path(modules_path)

  logging.info(f"Starting validation in {modules_path}")
  
  for module_path in modules_dir.iterdir():
    if module_path.is_dir():
      logging.info(f"Validating module: {module_path.name}")

      for file_path in module_path.rglob('*'):
        if file_path.is_file():
          with file_path.open('r') as f:
            content = f.read()
            matches = re.findall(r'\bmodules/([a-zA-Z0-9_-]+)/', content)
            for match in matches:
              if match != module_path.name and match != 'common':
                failed_files.append(str(file_path))
                break

  logging.info("Validation completed")
  return failed_files

if __name__ == "__main__":
  modules_path = 'apps/nextjs/src/modules'
  failed_files = validate_module_references(modules_path)
  if failed_files:
    logging.error("Files with invalid references found:")
    for file in failed_files:
      logging.error(file)
    raise ValueError("Invalid module references found")
  else:
    logging.info("All files are valid.")