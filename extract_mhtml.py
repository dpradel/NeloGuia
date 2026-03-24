import email
import sys

def main():
    mhtml_path = r"c:\Users\dpradel\Downloads\Nelogica - Tecnologia e Informação para o Mercado Financeiro.mhtml"
    try:
        with open(mhtml_path, 'r', encoding='utf-8', errors='ignore') as f:
            msg = email.message_from_file(f)
        
        for part in msg.walk():
            if part.get_content_type() == 'text/html':
                html = part.get_payload(decode=True).decode('utf-8', errors='ignore')
                with open('extracted_nelogica.html', 'w', encoding='utf-8') as out:
                    out.write(html)
                print("Extracted successfully!")
                return
        print("No text/html part found.")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == '__main__':
    main()
