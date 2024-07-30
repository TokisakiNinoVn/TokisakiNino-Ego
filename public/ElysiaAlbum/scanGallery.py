import os
import json

# Thư mục chứa các tệp hình ảnh
gallery_dir = 'C:/Code/TokisakiNino-Ego/public/ElysiaAlbum/Gallery'

# Định dạng hình ảnh cần tìm
image_extensions = ('.jpg', '.jpeg', '.gif', '.png')

# Danh sách lưu trữ thông tin tệp hình ảnh
image_files = []

# Duyệt qua các tệp trong thư mục Gallery
counts = 1
for filename in os.listdir(gallery_dir):
    if filename.lower().endswith(image_extensions):
        # file_path = os.path.join(gallery_dir, filename)
        # Thêm thông tin tệp vào danh sách
        image_files.append({
            'id': counts,
            'file_name': filename
        })
        print(">> ", counts , filename)
        counts += 1
        
json_file_path = 'C:/Code/TokisakiNino-Ego/public/ElysiaAlbum/images.json'
with open(json_file_path, 'w') as json_file:
    json.dump(image_files, json_file, indent = 4)

print(f">> Danh sách hình ảnh đã được lưu vào '{json_file_path}'.")

