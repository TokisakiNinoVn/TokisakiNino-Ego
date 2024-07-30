import os

# Thay đổi đường dẫn này thành đường dẫn đến thư mục chứa các tệp ảnh của bạn
directory = 'C:/Code/TokisakiNino-Ego/public/ElysiaAlbum/Gallery'

# Lấy danh sách tất cả các tệp trong thư mục
files = os.listdir(directory)

# Tạo danh sách các định dạng tệp cần thay đổi
file_formats = ['.jpg', '.gif', '.jpeg', '.png']

# Đếm số lượng tệp đã đổi tên
file_count = 1

for file_name in files:
    # Kiểm tra định dạng tệp
    if any(file_name.endswith(ext) for ext in file_formats):
        # Tạo tên mới cho tệp
        new_file_name = f'ELysia({file_count}){os.path.splitext(file_name)[1]}'
        
        # Đường dẫn cũ và mới
        old_file_path = os.path.join(directory, file_name)
        new_file_path = os.path.join(directory, new_file_name)
        
        # Đổi tên tệp
        os.rename(old_file_path, new_file_path)
        print(">> ","[", file_count,"]",  old_file_path, " >> ", new_file_path)
        
        # Tăng số đếm
        file_count += 1

print('Tất cả các tệp đã được đổi tên.')
