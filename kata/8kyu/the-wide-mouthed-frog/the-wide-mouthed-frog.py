# https://www.codewars.com/kata/57ec8bd8f670e9a47a000f89

def mouth_size(animal): 
    return "small" if animal.lower() == "alligator" else "wide"

mouth_size("toucan") # -> "wide"
mouth_size("ant bear") # -> "wide"
mouth_size("alligator") # -> "small"